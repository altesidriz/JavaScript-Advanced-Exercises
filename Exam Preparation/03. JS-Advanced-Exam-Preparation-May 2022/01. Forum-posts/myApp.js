window.addEventListener("load", main)
function main() {
    const input = {
        title: document.getElementById('post-title'),
        category: document.getElementById('post-category'),
        content: document.getElementById('post-content')
    };
    const lists = {
        review: document.getElementById('review-list'),
        published: document.getElementById('published-list')
    }
    document.getElementById('publish-btn').addEventListener('click', publish);
    document.getElementById('clear-btn').addEventListener('click', clear);


    function publish() {
        event.preventDefault();

        const title = input.title.value;
        const category = input.category.value;
        const content = input.content.value;

        if (title == '' || category == '' || content == '') {
            return;
        }

        const li = document.createElement('li');
        li.className = 'rpost';
        li.innerHTML = `<article>
            <h4>${title}</h4>
            <p>Category: ${category}</p>
            <p>Content: ${content}</p>
            </article>
            <button class="action-btn edit">Edit</button>
            <button class="action-btn approve">Approve</button>`;

        lists.review.appendChild(li);

        input.title.value = '';
        input.category.value = '';
        input.content.value = '';

        li.querySelector('.edit').addEventListener('click', edit);
        li.querySelector('.approve').addEventListener('click', approve);

        function edit() {
            input.title.value = title;
            input.category.value = category;
            input.content.value = content;
            li.remove();
        }
        function approve() {
            lists.published.appendChild(li);
            li.querySelector('.edit').remove();
            li.querySelector('.approve').remove();
        }
    }

    function clear() {
        lists.published.innerHTML = '' ;
    }
}