
async function fetchPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = response.json();
    return data;
}

export default function createResource() {
    let status = "loading";
    let result;
    let suspender = fetchPosts().then(
        data => {
            status = "success";
            result = data;
        },
        error => {
            status = "error";
            result = error;
        }
    );

    return {
        read() {
            if (status === "loading") {
                throw suspender;
            }
            else if (status === "error") {
                throw result;
            }
            else if (status === "success") {
                return result;
            }
        }
    }
}