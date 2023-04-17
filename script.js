window.onload = function(){
    const submitButton = document.getElementById("submit");
    const shareBox = document.getElementsByClassName("share-box");
    const profile = document.getElementsByClassName("profile");
    const socials = document.getElementsByClassName("socials");
    const profileShare = document.getElementsByClassName("profile-share");

    let state = true;
    let screenWidth = document.documentElement.clientWidth;

    window.addEventListener("resize", () => {
        screenWidth = document.documentElement.clientWidth;
        if(screenWidth <= 650){
            shareBox[0].style.display = "none";
            submitButton.style.backgroundColor = "";
            submitButton.style.color = "";
        }else{
            profile[0].style.display = "flex";
            socials[0].style.display = "none";
            profileShare[0].style.backgroundColor = "";
            profileShare[0].style.paddingLeft = "";
        }
    })
    
    submitButton.addEventListener("click", () => {
        if(screenWidth <= 650){
            if(state){
                profile[0].style.display = "none";
                socials[0].style.display = "flex";
                profileShare[0].style.backgroundColor = "#48556a";
                profileShare[0].style.paddingLeft = "0";
                state = false;
            }
            else{
                profile[0].style.display = "flex";
                socials[0].style.display = "none";
                profileShare[0].style.backgroundColor = "";
                profileShare[0].style.paddingLeft = "";
                state = true;
            }
        }
        else{
            if(state){
                shareBox[0].style.display = "flex";
                submitButton.style.backgroundColor = "#9eafc2";
                submitButton.style.color = "white";
                state = false;
            }
            else{
                shareBox[0].style.display = "none";
                submitButton.style.backgroundColor = "";
                submitButton.style.color = "";
                state = true;
            }
        }
    })
}
