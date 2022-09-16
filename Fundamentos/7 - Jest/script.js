const verifyNanNumber = (result) => {
    if (isNaN(result)) {
        throw new Error('Os valores precisam ser numericos');
    }
}

const verifyBlankSpaces = (value1, value2) => {
    if (value1.trim() === '' || value2.trim() === '') {
        throw new Error('Os campos nao podem estar em branco');
    }
}

const sum = () => {
    const value1 = document.getElementById('value1').value;
    const value2 = document.getElementById('value2').value;
    try {
        verifyBlankSpaces(value1, value2);
    } catch (error) {
        return alert(error.message)
    }

    const result = Number(value1) + Number(value2);
    console.log(result);
    try {
        verifyNanNumber(result);
    } catch (error) {
        document.getElementById('value1').value = '';
        document.getElementById('value2').value = '';
        return alert('Os valores precisam ser numericos!');
    }

    document.getElementById('result').innerHTML = `Resultado: ${result}`;
    document.getElementById('value1').value = '';
    document.getElementById('value2').value = '';
  }
  window.onload = () => {
    const button = document.getElementById('button');
    button.addEventListener('click', sum);
  }