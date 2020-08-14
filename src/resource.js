
async function fetchPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = response.json();
    return data;
}

export default function wrapPromise(promise) {
    let status = "loading";
    let result;
    let suspender = promise().then(
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

export default function createResource() {
    return {
        posts: wrapPromise(fetchPosts());
        // Add other posts here...
    }
}