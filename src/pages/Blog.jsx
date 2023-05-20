
const Blog = () => {
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Questions</th>
                            <th>Answers</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <th>1</th>
                            <td>What is an access token and refresh token? <br /> How do they work and where should we <br /> store them on the client-side?</td>
                            <td>An access token is a credential given to a client (application or user) <br />
                                after successful authentication. It proves authorization to access specific <br />
                                resources on a server and is included in requests to protected APIs or <br />
                                resources. On the other hand, a refresh token is a long-lived credential <br />
                                issued alongside the access token. It is securely stored on the client-side and <br />
                                used to obtain a new access token when the current one expires. Access tokens <br />
                                should be stored securely on the client-side, such as in HTTP-only cookies or <br />
                                browser storage mechanisms, while refresh tokens should be stored even more <br />
                                securely in locations like secure cookies or operating system/browser-provided <br />
                                secure storage. This separation of tokens helps maintain security by minimizing <br />
                                the exposure of sensitive credentials and reducing the risk of unauthorized access <br />
                                if an access token is compromised.</td>
                        </tr>
                        {/* row 2 */}
                        <tr>
                            <th>2</th>
                            <td>Compare SQL and NoSQL databases?</td>
                            <td>SQL (Structured Query Language) databases follow a relational data model, <br />
                                organizing data into tables with predefined schemas and supporting complex <br />
                                relationships between entities. They are suitable for structured and consistent <br />
                                data, ensuring data integrity through ACID transactions. SQL databases excel in <br />
                                complex querying and are vertically scalable, requiring hardware upgrades for <br />
                                increased workload.
                                <br />
                                <br />
                                NoSQL (Not Only SQL) databases embrace various data models like key-value pairs, <br />
                                documents, columns, or graphs. They prioritize scalability and performance, <br />
                                distributing data across multiple servers for horizontal scaling. NoSQL databases <br />
                                offer flexibility in handling unstructured or semi-structured data and have dynamic <br />
                                schemas. However, they may sacrifice some ACID properties and have varying approaches <br />
                                to managing data relationships.
                            </td>


                        </tr>
                        {/* row 3 */}
                        <tr>
                            <th>3</th>
                            <td>What is express js? What is Nest JS?</td>
                            <td>Express.js is a minimalistic and flexible web application framework <br />
                                for Node.js. It provides a set of features and tools to build web applications <br />
                                and APIs. Express.js simplifies the process of handling HTTP requests, routing, <br />
                                and middleware management. It allows developers to create robust and scalable web <br />
                                applications quickly. With its lightweight nature, Express.js provides a simple and <br />
                                intuitive interface for building server-side applications in JavaScript.
                                <br />
                                <br />
                                NestJS, on the other hand, is a progressive and opinionated framework for building <br />
                                efficient and scalable server-side applications using TypeScript. NestJS is built on <br />
                                top of Express.js, leveraging its features while adding additional structure and <br />
                                functionality. It follows the modular architecture pattern, making it easy to develop <br />
                                complex applications by organizing code into modules. NestJS embraces TypeScripts benefits, <br />
                                including strong typing, decorators, and dependency injection, to enhance developer <br />
                                productivity and code maintainability.
                            </td>

                        </tr>
                        <tr>
                            <th>4</th>
                            <td>What is MongoDB aggregate and how does it work?</td>
                            <td>MongoDB aggregate method is a powerful tool for performing advanced data <br /> 
                            processing and analysis within the database. It allows for the construction of <br /> 
                            pipelines consisting of stages that transform and manipulate data. Each stage performs <br /> 
                            specific operations, such as filtering, grouping, sorting, or calculating aggregate <br /> 
                            values, and the output is passed to the next stage. This enables developers to <br /> 
                            efficiently perform complex data transformations and analytics directly within MongoDB, <br /> 
                            reducing the need for external processing and enabling concise and powerful data aggregation.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Blog;