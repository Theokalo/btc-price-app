export const request = async (endpoint: string, method: string, data?: any) => {
    const url = `${endpoint}`;
    try {
      let response = await fetch(url, {
        method: method || 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      return await response.json();

    } catch (e) {
      throw e;
    }
  };