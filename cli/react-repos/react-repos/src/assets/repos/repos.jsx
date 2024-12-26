import {useState}from'react'
import './repos.css'
function Repos(){
    // const repos = [
    //     {
    //         id:1,
    //         name:"lesson_hm"
    //     },
    //     {
    //         id: 2,
    //         name:"algo-hello"
    //     },
    //     {
    //         id: 3,
    //         name:"prompt"
    //     }
    // ]
    // vue template?
    // js 区域
   const [repos,setRepos] = useState([])
    return(
        // html 区域 react 发明了 JSX 语法在JSX 语法中，我们可以直接写HTML标签
        //JS
        <div className="github-repos">
            <h2>Github Repositories</h2>
        <ul>
            {
                repos.map(repo => (
                    <li key={repo.id}>
                        {repo.name}/li</li>
                ))
            }
        
        </ul>
        {repos.length === 0 && <p>没有repos</p>}
        </div>
    )
}

export default Repos