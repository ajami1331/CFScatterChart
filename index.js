document.getElementById('fetchButton').onclick = () => {
    const userName = document.getElementById('userName').value;
    const userInfoUrl = "https://codeforces.com/api/user.info?handles=";
    fetch(userInfoUrl + userName).then(res => console.log(res));
}