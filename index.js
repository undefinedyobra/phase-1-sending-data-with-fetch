// Add your code here
function submitData(name, email) {
    const url = 'http://localhost:3000/users';
    const requestBody = {
      name,
      email,
    };
  
    const headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };

    return fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(requestBody),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        const newId = document.createElement('div');
        newId.textContent = `New user id: ${data.id}`;
        document.body.appendChild(newId);
        return data;
      })
      .catch((error) => {
        const errorMessage = document.createElement('div');
        errorMessage.textContent = `Error: ${error.message}`;
        document.body.appendChild(errorMessage);
      });
  }