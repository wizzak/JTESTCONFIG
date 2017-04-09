Joomla.submitbutton = function (task){
    if (task == ''){
        return false;
    }
    else{
        var isValid=true;
        var action = task.split('.');
        if (action[1] != 'cancel' && action[1] != 'close'){
            var forms =jQuery('form.form-validate');
            for (var i = 0; i < forms.length; i++){
                if (!document.formvalidator.isValid(forms[i])){
                    isValid = false;
                    break;
                }

            }
        }

        if(isValid){
            Joomla.submitform(task);
            return;
        }
        else{
            alert(Joomla.JText._('COM_HELLOWORLD_ERROR_UNACCAPTABLE', 'Some values are unaccaptable'));
            return false;
        }
    }
}
