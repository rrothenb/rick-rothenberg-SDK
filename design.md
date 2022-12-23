Some thoughts about the design

- I originally was going to use a chaining mechanism for providing optional arguments as I previously did in https://github.com/cloud-elements/ce-sdkifier, but I decided on a more idiomatic approach that was simpler to implement.
- I would have included unit tests if I had enough time
- I have some criticisms of the REST API, but decided to conform to it anyway, rather than hiding it.  I've run into issues before when trying to 'fix' a flawed API with a proxy or SDK and it adds it's own issues so it's often not worth the effort (IMHO).
- I chose to avoid pulling in any dependencies and not requiring the latest node that provides the fetch API, so the code is a little uglier than might otherwise be possible.

