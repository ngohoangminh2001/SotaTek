var toDoTasks = [
    {
        name: 'Do homework',
        description: '',
        dueDate: new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate(),
        priority: 'Normal',
        completed: false
    },
    {
        name: 'Do housework',
        description: '',
        dueDate: new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate(),
        priority: 'Normal',
        completed: false,
    },
    {
        name: 'Learn something',
        description: '',
        dueDate: new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate(),
        priority: 'Normal',
        completed: false
    }
];

window.onload = () => {
    toDoTasks.sort((a, b) => { return Number(new Date(a.dueDate)) - Number(new Date(b.dueDate)) });
    document.getElementById('due-date-1').setAttribute('min', new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate());
    document.getElementById('due-date-1').setAttribute('value', new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate());

    document.getElementById('add').onclick = () => {
        var existed = false;
        for (const value of toDoTasks)
            if (value.name.toLowerCase() == document.getElementById('add-new-task').value.toLowerCase())
                existed = true;
        if (document.getElementById('add-new-task').value == '') document.getElementById("required").innerHTML = "Task title is a required field.";
        else if (existed == true) document.getElementById("required").innerHTML = "Task title has already been existed.";
        else {
            document.getElementById("required").innerHTML = "";
            toDoTasks.push({
                name: document.getElementById('add-new-task').value,
                description: document.getElementById('new-task-description').value,
                dueDate: document.getElementById('due-date-1').value,
                priority: document.getElementById('priority-selection').value,
                completed: false
            });
            toDoTasks.sort((a, b) => { return Number(new Date(a.dueDate)) - Number(new Date(b.dueDate)) });

            var div20 = document.createElement('div');
            div20.setAttribute('class', 'div20');
            document.getElementById('div-2').appendChild(div20);

            var div201 = document.createElement('div');
            div201.setAttribute('class', 'div201');
            div20.appendChild(div201);

            var div2011 = document.createElement('div');
            div2011.setAttribute('class', 'div2011');
            div201.appendChild(div2011);

            var tick = document.createElement('input');
            tick.setAttribute('type', 'checkbox');
            tick.setAttribute('class', 'tick');
            tick.setAttribute('name', 'tick');
            div2011.appendChild(tick);

            var taskName = document.createElement('label');
            taskName.setAttribute('class', 'task-name');
            taskName.setAttribute('for', 'tick');
            taskName.innerHTML = document.getElementById('add-new-task').value;
            div2011.appendChild(taskName);

            var div2012 = document.createElement('div');
            div2012.setAttribute('class', 'div2012');
            div201.appendChild(div2012);

            var detail = document.createElement('button');
            detail.setAttribute('class', 'detail');
            detail.innerHTML = 'Detail';
            div2012.appendChild(detail);

            var remove = document.createElement('button');
            remove.setAttribute('class', 'remove');
            remove.innerHTML = 'Remove';
            div2012.appendChild(remove);

            var div202 = document.createElement('div');
            div202.setAttribute('class', 'div202');
            // div202.setAttribute('id', 'minh');
            div20.appendChild(div202);

            var tasks = document.createElement('input');
            tasks.setAttribute('type', 'text');
            tasks.setAttribute('class', 'tasks');
            tasks.setAttribute('placeholder', document.getElementById('add-new-task').value);
            div202.appendChild(tasks);

            var descriptionText = document.createElement('p');
            var descriptionBold = document.createElement('b');
            descriptionBold.innerHTML = 'Description';
            descriptionText.appendChild(descriptionBold);
            div202.appendChild(descriptionText);

            var description = document.createElement('textarea');
            description.setAttribute('class', 'description');
            description.setAttribute('cols', '30');
            description.setAttribute('rows', '10');
            description.setAttribute('placeholder', 'Lorem Ipsum....');
            div202.appendChild(description);

            var div2021 = document.createElement('div');
            div2021.setAttribute('class', 'div2021');
            div202.appendChild(div2021);

            var div20211 = document.createElement('div');
            div20211.setAttribute('class', 'div20211');
            div2021.appendChild(div20211);

            var dueDateText = document.createElement('p');
            var dueDateBold = document.createElement('b');
            dueDateBold.innerHTML = 'Due Date';
            dueDateText.appendChild(dueDateBold);
            div20211.appendChild(dueDateText);

            var dueDate2 = document.createElement('input');
            dueDate2.setAttribute('type', 'date');
            dueDate2.setAttribute('class', 'due-date-2');
            dueDate2.setAttribute('min', new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate());
            dueDate2.setAttribute('value', document.getElementById('due-date-1').value);
            div20211.appendChild(dueDate2);

            var div20212 = document.createElement('div');
            div20212.setAttribute('class', 'div20212');
            div2021.appendChild(div20212);

            var priorityText = document.createElement('p');
            var priorityBold = document.createElement('b');
            priorityBold.innerHTML = 'Priority';
            priorityText.appendChild(priorityBold);
            priorityText.setAttribute('class', 'priority-text');
            div20212.appendChild(priorityText);

            var prioritySelection = document.createElement('select');
            prioritySelection.setAttribute('class', 'priority-selection');
            var option1 = document.createElement('option');
            option1.innerHTML = document.getElementById('priority-selection').value;
            prioritySelection.appendChild(option1);
            if (option1.innerHTML == 'Normal') {
                var option2 = document.createElement('option');
                option2.innerHTML = 'Low';
                prioritySelection.appendChild(option2);
                var option3 = document.createElement('option');
                option3.innerHTML = 'High';
                prioritySelection.appendChild(option3);
            }
            else if (option1.innerHTML == 'Low') {
                var option2 = document.createElement('option');
                option2.innerHTML = 'Normal';
                prioritySelection.appendChild(option2);
                var option3 = document.createElement('option');
                option3.innerHTML = 'High';
                prioritySelection.appendChild(option3);
            }
            else {
                var option2 = document.createElement('option');
                option2.innerHTML = 'Low';
                prioritySelection.appendChild(option2);
                var option3 = document.createElement('option');
                option3.innerHTML = 'Normal';
                prioritySelection.appendChild(option3);
            }
            div20212.appendChild(prioritySelection);

            var update = document.createElement('button');
            update.setAttribute('class', 'update');
            update.innerHTML = 'Update';
            div202.appendChild(update);

            alert('Add new task successfully!');
        }
    }

    document.getElementById('detail-homework').onclick = () => {
        if (document.getElementById('div-2-1-2').style.display === 'none') document.getElementById('div-2-1-2').style.display = 'block';
        else document.getElementById('div-2-1-2').style.display = 'none';
    }
    document.getElementById('remove-homework').onclick = () => {
        document.getElementById('div-2-1').remove();
        toDoTasks.splice(toDoTasks.findIndex(obj => obj.name == 'Do homework' || obj.name == document.getElementById('do-homework').value), 1);
    }
    document.getElementById('text-do-homework').innerHTML = toDoTasks.find(obj => obj.name == 'Do homework').name;
    document.getElementById('do-homework').setAttribute('placeholder', toDoTasks.find(obj => obj.name == 'Do homework').name);
    document.getElementById('update-homework').onclick = () => {
        if (document.getElementById('do-homework').value != '') {
            document.getElementById('text-do-homework').innerHTML = document.getElementById('do-homework').value;
            document.getElementById('do-homework').setAttribute('placeholder', document.getElementById('do-homework').value);
            toDoTasks.find(obj => obj.name == 'Do homework').name = document.getElementById('do-homework').value;
        }
        if (document.getElementById('description-homework').value != '')
            toDoTasks.find(obj => obj.name == document.getElementById('do-homework').value).description = document.getElementById('description-homework').value;
        toDoTasks.find(obj => obj.name == document.getElementById('do-homework').value).dueDate = (document.getElementById('due-date-2-homework').value);
        toDoTasks.sort((a, b) => { return Number(new Date(a.dueDate)) - Number(new Date(b.dueDate)) });
        toDoTasks.find(obj => obj.name == document.getElementById('do-homework').value).priority = document.getElementById('priority-homework-selection').value;
        alert('Update successfully!');
    }
    document.getElementById('due-date-2-homework').setAttribute('min', new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate());
    document.getElementById('due-date-2-homework').setAttribute('value', toDoTasks.find(obj => obj.name == 'Do homework').dueDate);

    document.getElementById('detail-housework').onclick = () => {
        if (document.getElementById('div-2-2-2').style.display === 'none') document.getElementById('div-2-2-2').style.display = 'block';
        else document.getElementById('div-2-2-2').style.display = 'none';
    }
    document.getElementById('remove-housework').onclick = () => {
        document.getElementById('div-2-2').remove();
        toDoTasks.splice(toDoTasks.findIndex(obj => obj.name == 'Do housework' || obj.name == document.getElementById('do-housework').value), 1);
    }
    document.getElementById('text-do-housework').innerHTML = toDoTasks.find(obj => obj.name == 'Do housework').name;
    document.getElementById('do-housework').setAttribute('placeholder', toDoTasks.find(obj => obj.name == 'Do housework').name);
    document.getElementById('update-housework').onclick = () => {
        if (document.getElementById('do-housework').value != '') {
            document.getElementById('text-do-housework').innerHTML = document.getElementById('do-housework').value;
            document.getElementById('do-housework').setAttribute('placeholder', document.getElementById('do-housework').value);
            toDoTasks.find(obj => obj.name == 'Do housework').name = document.getElementById('do-housework').value;
        }
        if (document.getElementById('description-housework').value != '')
            toDoTasks.find(obj => obj.name == document.getElementById('do-housework').value).description = document.getElementById('description-housework').value;
        toDoTasks.find(obj => obj.name == document.getElementById('do-housework').value).dueDate = (document.getElementById('due-date-2-housework').value);
        toDoTasks.sort((a, b) => { return Number(new Date(a.dueDate)) - Number(new Date(b.dueDate)) });
        toDoTasks.find(obj => obj.name == document.getElementById('do-housework').value).priority = document.getElementById('priority-housework-selection').value;
        alert('Update successfully!');
    }
    document.getElementById('due-date-2-housework').setAttribute('min', new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate());
    document.getElementById('due-date-2-housework').setAttribute('value', toDoTasks.find(obj => obj.name == 'Do housework').dueDate);

    document.getElementById('detail-something').onclick = () => {
        if (document.getElementById('div-2-3-2').style.display === 'none') document.getElementById('div-2-3-2').style.display = 'block';
        else document.getElementById('div-2-3-2').style.display = 'none';
    }
    document.getElementById('remove-something').onclick = () => {
        document.getElementById('div-2-3').remove();
        toDoTasks.splice(toDoTasks.findIndex(obj => obj.name == 'Learn something' || obj.name == document.getElementById('learn-something').value), 1);
    }
    document.getElementById('text-learn-something').innerHTML = toDoTasks.find(obj => obj.name == 'Learn something').name;
    document.getElementById('learn-something').setAttribute('placeholder', toDoTasks.find(obj => obj.name == 'Learn something').name);
    document.getElementById('update-something').onclick = () => {
        if (document.getElementById('learn-something').value != '') {
            document.getElementById('text-learn-something').innerHTML = document.getElementById('learn-something').value;
            document.getElementById('learn-something').setAttribute('placeholder', document.getElementById('learn-something').value);
            toDoTasks.find(obj => obj.name == 'Learn something').name = document.getElementById('learn-something').value;
        }
        if (document.getElementById('description-something').value != '')
            toDoTasks.find(obj => obj.name == document.getElementById('learn-something').value).description = document.getElementById('description-something').value;
        toDoTasks.find(obj => obj.name == document.getElementById('learn-something').value).dueDate = (document.getElementById('due-date-2-something').value);
        toDoTasks.sort((a, b) => { return Number(new Date(a.dueDate)) - Number(new Date(b.dueDate)) });
        toDoTasks.find(obj => obj.name == document.getElementById('learn-something').value).priority = document.getElementById('priority-something-selection').value;
        alert('Update successfully!');
    }
    document.getElementById('due-date-2-something').setAttribute('min', new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate());
    document.getElementById('due-date-2-something').setAttribute('value', toDoTasks.find(obj => obj.name == 'Learn something').dueDate);

    document.getElementById('search').oninput = () => {
        var allDisplayNone = true;
        for (const i of document.getElementsByClassName('div20'))
            if (document.getElementById('search').value != '')
                if (i.children[0].children[0].children[1].innerHTML.toLowerCase().includes(document.getElementById('search').value.toLowerCase())) {
                    i.style.display = 'block';
                    allDisplayNone = false;
                }
                else i.style.display = 'none';
            else {
                i.style.display = 'block';
                allDisplayNone = false;
            }
        if (allDisplayNone && document.getElementById('search').value != '') document.getElementById('div-2').children[2].innerHTML = 'No tasks match your search.';
        else document.getElementById('div-2').children[2].innerHTML = '';
    }

    document.getElementById('tick-do-homework').onchange = () => {
        var noneChecked = true;
        for (const i of document.getElementsByClassName('tick'))
            if (i.checked === true) noneChecked = false;
        if (noneChecked) document.getElementById('bulk-action').style.display = 'none';
        else {
            document.getElementById('bulk-action').style.display = 'grid';
            document.getElementById('bulk-action').style.gridTemplateColumns = 'repeat(2, 1fr)';
        }
    }

    document.getElementById('tick-do-housework').onchange = () => {
        var noneChecked = true;
        for (const i of document.getElementsByClassName('tick'))
            if (i.checked === true) noneChecked = false;
        if (noneChecked) document.getElementById('bulk-action').style.display = 'none';
        else {
            document.getElementById('bulk-action').style.display = 'grid';
            document.getElementById('bulk-action').style.gridTemplateColumns = 'repeat(2, 1fr)';
        }
    }

    document.getElementById('tick-learn-something').onchange = () => {
        var noneChecked = true;
        for (const i of document.getElementsByClassName('tick'))
            if (i.checked === true) noneChecked = false;
        if (noneChecked) document.getElementById('bulk-action').style.display = 'none';
        else {
            document.getElementById('bulk-action').style.display = 'grid';
            document.getElementById('bulk-action').style.gridTemplateColumns = 'repeat(2, 1fr)';
        }
    }

    document.getElementById('done').onclick = () => {
        for (const i of document.getElementsByClassName('div20'))
            if (i.children[0].children[0].children[0].checked === true) {
                toDoTasks.find(obj => obj.name == i.children[0].children[0].children[1].innerHTML).completed = true;
                i.remove();
            }
    }

    document.getElementById('delete').onclick = () => {
        for (const i of document.getElementsByClassName('div20'))
            if (i.children[0].children[0].children[0].checked === true) {
                toDoTasks.splice(toDoTasks.findIndex(obj => obj.name == i.children[0].children[0].children[1].innerHTML), 1);
                i.remove();
            }
    }

    setInterval(() => {
        if (document.getElementsByClassName('div20').length == 0)
            document.getElementById('bulk-action').style.display = 'none';
    }, 1);
}

console.log(toDoTasks);