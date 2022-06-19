'use strict'

// Inputs
const inputBudget = document.querySelector('.budg_inp')
const inputExpense = document.querySelector('.exp_inp')
const inputAmount = document.querySelector('.exp_inpA')
// Buttons 
const btnAdd = document.querySelector('.btn_sub')
const btnExp = document.querySelector('.btn_exp')
//Fig 
const budget = document.querySelector('.figB')
const expense = document.querySelector('.figr')
const balance = document.querySelector('.figBa')
//
const container = document.querySelector('.container')
const value = document.querySelector('.value')
const edit = document.querySelector('.ic4')
const delet  = document.querySelector('.ic5')
// console.log(coin)


// Functions
//  const expVal = inputExpense.value
//  const balVal = 



// Eventlisteners
btnAdd.addEventListener('click', function(){
    budget.textContent = `$ ${inputBudget.value}`
    inputBudget.value = ''
    
})
    let arr = []
btnExp.addEventListener('click', function(){
    let budgVal = Number(budget.textContent.split(' ')[1])

  
  
    //    container.insertAdjacentHTML ("afterbegin", html)
     
    container.innerHTML += `  <div class="value">
    <div class="v1"> <p >- ${inputExpense.value}</p></div>   
    <div class="coin">$ ${inputAmount.value}</div>
    <div class="icon">
    <i class="fas fa-edit ic4"></i>
    <i class="ri-delete-bin-line ic5"></i>
    
    </div>
    </div>
    `     
    arr.push(Number(inputAmount.value))
    

  const sum =  arr.reduce((acc, cur) => acc + cur, 0)
    // console.log(sum)

    balance.textContent = `$ ${budgVal - sum}`

    expense.textContent = `$ ${sum}`

    inputAmount.value = inputExpense.value = ''

})
  // const expVal = Number(coin.textContent.split('')[1])

    // const html = `  <div class="value">
    // <div class="v1"> <p >- ${inputExpense.value}</p></div>   
    // <div class="coin">$${inputAmount.value}</div>
    // <div class="icon">
    //   <i class="fas fa-edit ic4"></i>
    //   <i class="ri-delete-bin-line ic5"></i>

    // </div>
    //            </div>
    //  `

// const coin = document.querySelector('.coin')
    // let expVal =Number( coin.textContent.split(' ')[1])
