function insert(num){
        document.form.textinput.value = document.form.textinput.value + num;
      }
      
function clean() {
        // clean input area
        document.form.textinput.value = "";
      }
      
function back() {
        var text = document.form.textinput.value
       // remove last character from string
        document.form.textinput.value = text.substring(0,text.length-1)
      }
 
function calculate(){
        // eval calculation
        var text = document.form.textinput.value
        document.form.textinput.value = eval(text)
      }
