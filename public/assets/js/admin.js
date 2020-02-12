var Food = {
    obj: [{
            name: 'sparsh jain',
            food: [{
                type: 'hdkajbd',
                qty: 2
            }, {
                type: 'dfdfs',
                qty: 3
            }, {
                type: 'sdas',
                qty: 4
            }],
            location: 'dasdasd',
            time: 'dad',
            contact: 'dassad'
        },
        {
            name: 'sparsh jain',
            food: [{
                type: 'hdkajbd',
                qty: 2
            }, {
                type: 'dfdfs',
                qty: 3
            }, {
                type: 'sdas',
                qty: 4
            }],
            location: 'dasdasd',
            time: 'dad',
            contact: 'dassad'
        }
    ]
}
var Money = {
    obj: [{
        name: 'Sparsh ',
        company: 'SR',
        email: 'sdads@dsda',
        address: '1312,sdfs,312',
        phone: '98886676',
        amt: '123144'
    }, {
        name: 'Raghav',
        company: 'SRT',
        email: 'dadas@232.ds',
        address: '233,sdfsdf,3r3df',
        phone: '999887788',
        amt: '999990'
    }]
}
var Feed = {
        obj: [{ name: 'Sparsh', email: 'sdas.sda@dsad', suggest: 'nothing' }, { name: 'raghav', email: 'sdjalks.dmia@sldnsa', suggest: 'no' }]
    }
    ///////////////////////////////////////////////////////////////////////////////
var t = "<tbody>";
for (var i = 0; i < Feed.obj.length; i++) {
    t += "<tr>";
    var x = Feed.obj[i];
    for (j in x) {
        t += "<td>" + x[j] + "</td>";
    }
    t += "</tr>";
}
t += "</tbody>";
document.getElementById('feed_table').innerHTML += t;
///////////////////////////////////////////////////////////////////////////////
var text = "<tbody>";
for (var i = 0; i < Money.obj.length; i++) {
    text += "<tr>";
    var x = Money.obj[i];
    for (j in x) {
        if (j == 'amt') {
            text += "<td>₹ " + x[j] + "</td>";
        } else
            text += "<td>" + x[j] + "</td>";
    }
    text += "</tr>";
}
text += "</tbody>";
document.getElementById('money_table').innerHTML += text;


///////////////////////////////////////////////////////////////////////////////
var txt = "<tbody>";
for (var i = 0; i < Food.obj.length; i++) {
    txt += "<tr>";
    var x = Food.obj[i];
    for (var j in x) {
        if (j == 'food') {
            var txt2 = "<ul>";
            var txt3 = "<ul>";
            for (k in x[j]) {
                txt2 += "<li>" + x[j][k].type + "</li>";
                txt3 += "<li>" + x[j][k].qty + "</li>";
            }
            txt2 += "</ul>";
            txt3 += "</ul>";
            txt += "<td>" + txt2 + "</td>" + "<td>" + txt3 + "</td>";
        } else { txt += "<td>" + x[j] + "</td>"; }
    }
    txt += "</tr>";
}
txt += "</tbody>";
document.getElementById('food_table').innerHTML += txt;