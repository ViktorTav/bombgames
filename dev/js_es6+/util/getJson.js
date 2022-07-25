export const getJson = async (url) => {
    return (await fetch(url)).json();
};
