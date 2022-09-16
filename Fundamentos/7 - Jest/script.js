const verifyNanNumber = (result) => {
    if (isNaN(result)) {
        throw new Error('Os valores precisam ser numericos');
    }
}

const sum = () => {
    const value1 = document.getElementById('value1').value;
    const value2 = document.getElementById('value2').value;
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