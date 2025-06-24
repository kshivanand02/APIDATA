# APIDATA


he Dog CEO API is a free, public REST API that provides random dog images and breed data.

No API key or authentication is required to use it.

The base URL is https://dog.ceo/api.

The /breeds/image/random endpoint returns one random dog image.

The /breeds/image/random/{n} endpoint returns multiple random images (e.g., 10).

The /breeds/list/all endpoint lists all available dog breeds in JSON format.

The /breed/{breed-name}/images endpoint fetches all images of a specific breed.

The /breed/{breed-name}/images/random endpoint gives a random image of that breed.

The /breed/{breed-name}/list endpoint shows sub-breeds (if any) of a breed.

All responses are returned in JSON format with a message (data) and status.
