console.log("SCRIPT RUN");


const profileModal=document.querySelector(".profile-modal");
const profileClose=document.querySelector(".close-profile")
const profileForm=document.querySelector(".profile-form");
const user=document.getElementById("user");

makeTodoElement(JSON.parse(localStorage.getItem("todos")||"[]"));
user.addEventListener("click",()=>{
    profileForm.reset();
    profileModal.style.display="flex";
    
    
})
profileClose.addEventListener("click",()=>{
   
    profileModal.style.display="none";
     console.log(profileModal.style.display);
})

profileForm.addEventListener("submit",(e)=>{
    e.preventDefault();
   
    
getProfileData();
location.reload();


})


function getProfileData(){
    const nameProfile=document.querySelector(".profile-name").value;
    const  gradeProfile=document.querySelector(".profile-garde").value;
    const  sportProfile=document.querySelector(".profile-sport").value;
    const ageProfile=document.querySelector(".profile-age").value;
    const genderProfile=document.querySelector('input[name="gender"]:checked');
    const imageInput=document.querySelector(".profile-img");
    const imageProfile=imageInput.files[0];
   
    let gender=null;
       if(genderProfile){
       gender=genderProfile.dataset.gender;
    }
    



    
    
    
        
        
       // console.log(imageData)
 const profileData={
    name:nameProfile,
    grade:gradeProfile,
    sport:sportProfile,
    age:ageProfile,
    gender:gender,
    image:null
   
};
if (imageProfile){
const reader=new FileReader();
reader.onload=()=>{
    profileData.image=reader.result;
    localStorage.setItem("profile",JSON.stringify(profileData))
}

    reader.readAsDataURL(imageProfile);
    }else{
        localStorage.setItem('profile',JSON.stringify(profileData))
    }
   

}

    



function showProfile(){
    const profile=JSON.parse(localStorage.getItem("profile"))
    console.log(profile)
const liNavbar=document.querySelector(".li-navbar");
    const pTag=document.createElement("p");
    const aProfile=document.querySelector("a");
    pTag.classList.add("profile-submenu")
    liNavbar.appendChild(pTag);
    aProfile.addEventListener("click",(e)=>{
        e.preventDefault();
        pTag.classList.toggle("show");
    })
   
  
    pTag.textContent=`من  ${profile.name}  هستم کلاس ${profile.grade} و  ${profile.age}   ساله و به ورزش ${profile.sport}  علاقه دارم`

const profileImg=document.querySelector(".profile img");
if(profile.image){
profileImg.src=profile.image;
}else{
    profileImg.src="images/profile.jpeg"
}

console.log(profileImg)
const nameTitle=document.querySelector(".profile h4");
nameTitle.textContent=profile.name;



}

showProfile();



function listAll(){
    const subMenu=document.querySelector(".sub-menu");
    
    const todos=JSON.parse(localStorage.getItem("todos" )|| "[]");
  
   
    subMenu.innerHTML="";
todos.forEach(todo=>{
 const subItem=document.createElement("li");
  subItem.textContent=todo.item;
  subItem.classList.add("li-menu")
  subMenu.appendChild(subItem)
})
   
}

listAll();
const subMenu=document.querySelector(".sub-menu");
const openMenu=document.getElementById("open-Menu");
openMenu.addEventListener("click",(e)=>{
    e.preventDefault();
    
    subMenu.classList.toggle("open")
})

const menuSetting=document.getElementById("setting");
menuSetting.addEventListener("click",(e)=>{
    e.preventDefault();
    const darkMode=document.querySelector(".dark-mode");
    darkMode.classList.toggle("open");
    const themeSwitcherBtn=document.querySelector(".themSwitcher")
    themeSwitcherBtn.addEventListener("click",()=>{
        document.body.classList.toggle("dark")
        const themItem=themeSwitcherBtn.children[0];
        themItem.setAttribute("src",
            themItem.getAttribute("src")==="images/sun.png" ?
            "images/moon-stars.png":
            "images/sun.png"
            
        )
    })

})


//-----todos----///


const addBtn=document.getElementById("btnAdd");
const input=document.getElementById("addt");


addBtn.addEventListener("click",()=>{
    
   
    const item=input.value.trim();

    if(item){
        input.value="";
        const todos=!localStorage.getItem("todos")
        ?[]
        :JSON.parse(localStorage.getItem("todos"));
    const currentTodo={
        item:item,
        isCompleted:false

    }
    todos.push(currentTodo);
    localStorage.setItem("todos",JSON.stringify(todos));
    makeTodoElement([currentTodo])
    listAll();

    }
  
   })
   input.addEventListener("keydown",(e)=>{
    if(e.key==="Enter"){
addBtn.click();
    }

   })
    //---ساختن قسمت لیست کارها---//





//     function makeTodoElement(todo, todos){
//         const taskList=document.querySelector(".task-list");

//         const taskItem=document.createElement("div");
//        const taskContent=document.createElement("div");
//         const checkInput=document.createElement("input");
//         checkInput.type="checkbox";
//        const btnDelete=document.createElement("button");
//        const itemSpan=document.createElement("span");

//         taskItem.classList.add("task-item");
//         taskContent.classList.add("task-content");
//         checkInput.classList.add("checkbox");
//         itemSpan.classList.add("items");
//         btnDelete.classList.add("delete-task");

//        taskContent.appendChild(checkInput);
//       taskContent.appendChild(itemSpan);
//        taskList.appendChild(taskItem);
//        taskItem.appendChild(taskContent);
//        taskItem.appendChild(btnDelete);

// itemSpan.textContent=todo.item;
// checkInput.checked=todo.isCompleted;

// //checkInput.addEventListener("change",()=>{
   
//     //todo.isCompleted=checkInput.checked;
   
//    // localStorage.setItem("todos",JSON.stringify(todos))
//    // filterTasks(currentFilter)
// //})

// checkInput.addEventListener("click",(e)=>{
//    const currentTodo=checkInput.closest(".task-item");
//    console.log("currentTOdo:" ,currentTodo);
//    console.log(":all task items")
//    const currentInputIndex=[...document.querySelectorAll(".task-list .task-item")].indexOf(currentTodo);
//    console.log("index:", currentInputIndex);
//    todos[currentInputIndex].isCompleted=checkInput.checked;
  
//    localStorage.setItem("todos",JSON.stringify(todos))

// })

// btnDelete.addEventListener("click",()=>{
//     const currentTodo=btnDelete.parentElement;
//     console.log(currentTodo);
//     currentTodo.classList.add("fall");
//    currentTodo.addEventListener("animationend",()=>{
//     const todoIndex=[...document.querySelectorAll('.task-list .task-item')].indexOf(currentTodo);
//     console.log(todoIndex)
//         todos.splice(todoIndex,1);
//         localStorage.setItem("todos",JSON.stringify(todos))
//         listAll();
//         currentTodo.remove();
//     })
// })


//     }


// function showTodos(){
//     const todos=JSON.parse(localStorage.getItem("todos"||"[]"));
//     if(!todos){
//         return null;
//     }
//    console.log("show:",todos)
//     todos.forEach((todo) => {
//         makeTodoElement(todo,todos)
        
//     });
// }
// showTodos();



function makeTodoElement(todoArray){
    if(!todoArray){
        return null
    }

todoArray.forEach(todoObject=>{
 const taskList=document.querySelector(".task-list");

        const taskItem=document.createElement("div");
       const taskContent=document.createElement("div");
        const checkInput=document.createElement("input");
        checkInput.type="checkbox";
       const btnDelete=document.createElement("button");
       const itemSpan=document.createElement("span");

        taskItem.classList.add("task-item");
        taskContent.classList.add("task-content");
        checkInput.classList.add("checkbox");
        itemSpan.classList.add("items");
        btnDelete.classList.add("delete-task");

       taskContent.appendChild(checkInput);
      taskContent.appendChild(itemSpan);
       taskList.appendChild(taskItem);
       taskItem.appendChild(taskContent);
       taskItem.appendChild(btnDelete);

itemSpan.textContent=todoObject.item;
checkInput.checked=todoObject.isCompleted;

checkInput.addEventListener("click",(e)=>{
    const todos=JSON.parse(localStorage.getItem("todos"))
   const currentTodo=checkInput.closest(".task-item");
   console.log("currentTOdo:" ,currentTodo);
   console.log(":all task items")
   const currentInputIndex=[...document.querySelectorAll(".task-list .task-item")].indexOf(currentTodo);
   console.log("index:", currentInputIndex);
   todos[currentInputIndex].isCompleted=checkInput.checked;
  
   localStorage.setItem("todos",JSON.stringify(todos))

})

btnDelete.addEventListener("click",()=>{
    if(!checkInput.checked){
        return
    }
     const todos=JSON.parse(localStorage.getItem("todos"))
    const currentTodo=btnDelete.parentElement;
    console.log(currentTodo);
    currentTodo.classList.add("fall");
   currentTodo.addEventListener("animationend",()=>{
    const todoIndex=[...document.querySelectorAll('.task-list .task-item')].indexOf(currentTodo);
    console.log(todoIndex)
        todos.splice(todoIndex,1);
        localStorage.setItem("todos",JSON.stringify(todos))
        listAll();
        currentTodo.remove();
   })

})

})
}



const filtersBtn=document.querySelectorAll(".filter-btn");
var currentFilter="all";
console.log(currentFilter);
filtersBtn.forEach(btn=>{
    btn.addEventListener("click",()=>{
        filtersBtn.forEach(item=>{
 item.classList.remove("active")
        })
       btn.classList.add("active");
currentFilter=btn.dataset.filter;
filterTasks(currentFilter)

    });


})
function filterTasks(filter){
    const taskItem=document.querySelectorAll(".task-item");
taskItem.forEach(taskItem=>{
const checkbox=taskItem.querySelector(".checkbox");

if(filter==="all"){
    taskItem.style.display="flex"
}else if(filter==="complate"){
    taskItem.style.display=checkbox.checked ? "flex": "none"
} else if(filter==="pending"){
    taskItem.style.display=checkbox.checked ? "none" : "flex"
}

})

}
const clearCompeleted=document.querySelector(".clear-tasks");
 clearCompeleted.addEventListener("click",()=>{
    let todos=JSON.parse(localStorage.getItem("todos") || "[]");
    todos=todos.filter(todo=>!todo.isCompleted);
    console.log(todos);
    localStorage.setItem("todos",JSON.stringify(todos))
  
    
  const taskItem=document.querySelectorAll(".task-item");
   taskItem.forEach(taskItem=>{
      const checkbox=taskItem.querySelector(".checkbox");
    if(checkbox.checked){
          taskItem.classList.add("fall");
          taskItem.addEventListener('animationend',()=>{
            listAll()
                
 taskItem.remove();
          })
           
      }
    })
 })

 if("serviceWorker" in navigator){
    window.addEventListener("load",()=>{

        navigator.serviceWorker.register("./service-worker.js").then(()=>{
            console.log("Service Worker registered")
        }).catch((error)=>{
            console.error("Service Worker registration failed:",error)
        })


 })
 }