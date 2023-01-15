var openLetter = () => {
    document.getElementById('first-page').classList.add('moveRight');
    setTimeout(() => {
        document.getElementById('first-page').classList.add('hidden');
        document.getElementById('second-page').classList.remove('hidden');

    }, 350)
    setTimeout(() => {
        document.getElementById('second-page').classList.add('moveLeft', 'block');
    }, 600)
}

var openFirstWish = () => {
    document.getElementById('second-page').classList.remove('moveLeft');
    document.getElementById('second-page').classList.add('moveRight');
    setTimeout(() => {
        document.getElementById('second-page').classList.add('hidden');
        document.getElementById('third-page').classList.remove('hidden');

    }, 350)
    setTimeout(() => {
        document.getElementById('third-page').classList.add('moveLeft', 'block');
    }, 600)
}

var openSecondWish = () => {
    document.getElementById('third-page').classList.remove('moveLeft');
    document.getElementById('third-page').classList.add('moveRight');
    setTimeout(() => {
        document.getElementById('third-page').classList.add('hidden');
        document.getElementById('fourth-page').classList.remove('hidden');

    }, 350)
    setTimeout(() => {
        document.getElementById('fourth-page').classList.add('moveLeft', 'block');
    }, 600)
}

var openThirdWish = () => {
    document.getElementById('fourth-page').classList.remove('moveLeft');
    document.getElementById('fourth-page').classList.add('moveRight');
    setTimeout(() => {
        document.getElementById('fourth-page').classList.add('hidden');
        document.getElementById('fifth-page').classList.remove('hidden');

    }, 350)
    setTimeout(() => {
        document.getElementById('fifth-page').classList.add('moveLeft', 'block');
    }, 600)
}

var openTea = () => {
    document.getElementById('fifth-page').classList.remove('moveLeft');
    document.getElementById('fifth-page').classList.add('moveRight');
    setTimeout(() => {
        document.getElementById('fifth-page').classList.add('hidden');
        document.getElementById('tea').classList.remove('hidden');

    }, 350)
    setTimeout(() => {
        document.getElementById('tea').classList.add('fadeIn', 'block');
    }, 600)
}

var openFourthWish = () => {
    document.getElementById('tea').classList.remove('fadeIn');
    document.getElementById('tea').classList.add('moveRight');
    setTimeout(() => {
        document.getElementById('tea').classList.add('hidden');
        document.getElementById('sixth-page').classList.remove('hidden');

    }, 350)
    setTimeout(() => {
        document.getElementById('sixth-page').classList.add('moveLeft', 'block');
    }, 600)
}

var openFifthWish = () => {
    document.getElementById('sixth-page').classList.remove('moveLeft');
    document.getElementById('sixth-page').classList.add('moveRight');
    setTimeout(() => {
        document.getElementById('sixth-page').classList.add('hidden');
        document.getElementById('seventh-page').classList.remove('hidden');

    }, 350)
    setTimeout(() => {
        document.getElementById('seventh-page').classList.add('moveLeft', 'block');
    }, 600)
}

var openSeventhWish = () => {
    document.getElementById('seventh-page').classList.remove('moveLeft');
    document.getElementById('seventh-page').classList.add('moveRight');
    setTimeout(() => {
        document.getElementById('seventh-page').classList.add('hidden');
        document.getElementById('eight-page').classList.remove('hidden');

    }, 350)
    setTimeout(() => {
        document.getElementById('eight-page').classList.add('moveLeft', 'block');
    }, 600)
}

var openEightWish = () => {
    document.getElementById('eight-page').classList.remove('moveLeft');
    document.getElementById('eight-page').classList.add('moveRight');
    setTimeout(() => {
        document.getElementById('eight-page').classList.add('hidden');
        document.getElementById('ninth-page').classList.remove('hidden');

    }, 350)
    setTimeout(() => {
        document.getElementById('ninth-page').classList.add('moveLeft', 'block');
    }, 600)
}

var showEnd = () => {
    document.getElementById('ninth-page').classList.remove('moveLeft');
    document.getElementById('ninth-page').classList.add('moveRight');
    setTimeout(() => {
        document.getElementById('ninth-page').classList.add('hidden');
        document.getElementById('end').classList.remove('hidden');

    }, 350)
    setTimeout(() => {
        document.getElementById('end').classList.add('fadeIn', 'block');
    }, 600)
}