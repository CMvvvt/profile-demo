import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';
import Button from 'react-bootstrap/Button';


 class AboutPage extends React.Component {
    constructor(props){
        super(props);
    }

    state = {selected:false}

    changeVersion =() =>{
        this.setState({selected: !this.state.selected});
        versionName = !this.state.selected ? "English Version" : "中文版"
    }



    render() {
        return(
            <div className="about-page">
                <Hero title={this.props.title} />
                <Button variant="success" onClick={this.changeVersion} className="about-Button">{versionName}</Button>
                {this.state.selected ? ChArticle : EnArticle}
                
            </div>
        )
    }
   
} 


let versionName = "中文版";

const EnArticle = (
    <Content>
            <p>
            <strong>D</strong>iscovering my true passion in Computer Science takes some twists and turns as I navigated through the exploration of my academic interests during my undergraduate study. I first entered my college as a Chemical Engineering student under the heavy influence of my father, who has been in the same field for several decades. But immediately after my first semester of study, I discovered my intense interests in the financial sector and specifically in the creative, programming-driven implementation and solutions for often complex global, financial issues. Soon, I have found myself immersed in the learning of fundamental concepts in Financial Engineering and quantitative tools from Calculus, Probability and Statistics, and Linear Algebra. 
            </p>

            <p>
            <strong>B</strong>ut it was through my learning in Financial Mathematics, a sophomore course that requires a lot of implementation of Pricing derivatives through programming, that I experienced the thrill of combining financial knowledge with programming to bring out practical solutions to real world of financial engineering. I was mesmerized by the process of using algorithms to solve cross professional problems, and the successful interpretations of financial experiment through programming created a lasting impact on the development of my academic passion for computer science.  I have achieved absolute top scores among my peers, often placing me well at the first three rank among all students. 
            </p>

            <p>
            <strong>A</strong>s soon as I realized my interests in computer science and its application in the financial sector and other industries, I began to take part in more relevant academic development to further my preparation for the rigor and challenges of my future graduate study. In addition to a variety of courses in Mathematics, I have attended classes in various programming languages such as C++, Python, Matlab, R and SQL, and several computer science courses in Data Structure and Algorithm Analysis, Computer Networks and Database Technology. Of course, learning is never confined to the classroom environment and I have actively sought out some projects to further expand my programming skills and competence. 
            </p>

            <p>
            <strong>I</strong>n my first project, I used pyGame module in Python to complete a snake game. From interface design to class design to data structure selection of various objects, all of these have helped me to deepen my understanding of object-oriented programming, as well as my basic programming skills. I obtained a score of 98/100 (Top1) of Python programming experiment with fluent implementation and impressive experimental demonstration. Furthermore, in another project, I used C++ to complete the experiment of file compression and decompression. In this experiment, I implemented Huffman tree by building the minimum heap, stored it in the tree-information file, and obtained Huffman code to complete the file compression. When decompressing the file, the Huffman tree is rebuilt by reading the tree-information file, and then the information is saved in the decompressed file. In the same way, this experiment improved my programming ability to a great extent, and improved a lot of my basic knowledge and skills of computer science.
            </p>

            <p>
            <strong>I</strong>n a final project, I designed an Educational Administration Course Selection System for my Database Technology Course. I used Navicat to design the model for the entire database – each table, relationship and their attributes. I then created the database by writing the implementation of SQL statement with MySQL. At the same time, VB.NET was used to complete the development of front-end page and application system. All these projects have given me a solid foundation and ability to pursue Computer Science learning for a further study of graduate program.
            </p>

            <p>
            <strong>T</strong>o further expand my skills, I have also participated in Mathematical contest in modeling to expand my mathematical and programming skills, and interned as a data processing analyst in the Survey and Research Center for China Household and Finance, where I was tasked to manage much of the preliminary data cleanup, processing, and analysis every day using STATA. These project-based experiences and professional development have offered me valuable opportunities to engage in the learning and application of theoretical knowledge in Computer Science. Through my research and project participation, I was able to learn how to handle the important aspect of not only finance, but also other disciplines by applying the conception and algorithms of computer science. These experiences also urgently demonstrated to me the need for further academic learning in order to be prepared for more complex researches and competitive works in the future. 
            </p>

            <p>
            <strong>I</strong>t is thus my desire to enter a reputable graduate program in Computer Science to further equip myself with advanced theoretical knowledge and programming skills necessary for the success of my future career as a data engineer in the financial industry and tech industry. I want to gain more in-depth learning in Computer Science through more professional courses with projects and cultivate a solid programming and computer foundation for later work in Data Engineer to support tech companies. USC Viterbi’s rigorous graduate program with 37 units provides core curriculums in computer science that I highly desire and those courses will greatly boost my academic foundation. Meanwhile, USC offers flexible choices for elective courses to build my competence in different sub fields. Furthermore, the geographic location and the extremely attractive environment of USC I once experienced through campus visit are rather appealing to me. I am confident that with the diverse educational resources and the vast professional network at USC Viterbi, I will be able to enter the industry as a competent engineer with solid foundation and insights. With the success of my graduate school, I will be better positioned to enter elite corporate environments and contribute my expertise in their fields. 
            </p>

            </Content>
)

const ChArticle = (
    <Content>
        <p>
        在本科学习过程中，通过对学术兴趣的探索，发现我对计算机科学的真正热情会有些曲折。我最初是在父亲的巨大影响下以化学工程专业的学生身份进入我的大学的，父亲在同一个领域工作了几十年。但是，在我刚上学的第一学期后，我就对金融领域产生了浓厚的兴趣，尤其是对那些通常由复杂的全球性金融问题进行的，以编程为导向的创新实施和解决方案。很快，我发现自己沉迷于金融工程中的基本概念和微积分，概率与统计以及线性代数的定量工具的学习。
        </p>

        <p>
        但是，正是通过我在金融数学专业（一门大二课程）中的学习，需要通过编程来实现许多定价衍生工具，我才经历了将金融知识与编程相结合，为金融工程的现实世界提供实用解决方案的快感。我对使用算法解决跨专业问题的过程感到着迷，并且通过编程对金融实验的成功解释对我对计算机科学的学术热情的发展产生了持久的影响。我在同龄人中取得了绝对的最高分，常常使我在所有学生中都排在前三名。
        </p>

        <p>
        当我意识到我对计算机科学及其在金融领域和其他行业中的应用的兴趣后，我便开始参与更相关的学术发展，以进一步为将来的研究生学习的严峻和挑战做好准备。除了各种数学课程外，我还参加了各种编程语言的课程，例如C ++，Python，Matlab，R和SQL，并参加了一些有关数据结构和算法分析，计算机网络和数据库技术的计算机科学课程。当然，学习绝不仅限于课堂环境，我还积极寻找一些项目来进一步扩展我的编程技能和能力。

        </p>
        
        <p>
        在我的第一个项目中，我使用Python中的pyGame模块完成了蛇游戏。从界面设计到类设计再到各种对象的数据结构选择，所有这些都帮助我加深了对面向对象编程的理解以及我的基本编程技能。通过流畅的实现和令人印象深刻的实验演示，我获得了98/100（Top1）的Python编程实验得分。此外，在另一个项目中，我使用C ++完成了文件压缩和解压缩的实验。在本实验中，我通过构建最小堆来实现霍夫曼树，将其存储在树信息文件中，并获得霍夫曼代码以完成文件压缩。解压缩文件时，通过读取树信息文件来重建霍夫曼树，然后将信息保存在解压缩的文件中。同样，该实验在很大程度上提高了我的编程能力，并提高了我的许多计算机科学基础知识和技能。
        </p>

        <p>
        在最后一个项目中，我为数据库技术课程设计了一个教育管理课程选择系统。我使用Navicat为整个数据库（每个表，关系及其属性）设计模型。然后，我通过使用MySQL编写SQL语句的实现来创建数据库。同时，使用VB.NET来完成前端页面和应用程序系统的开发。所有这些项目为我提供了扎实的基础和能力，可以继续学习计算机科学，以进一步研究研究生课程。
        </p>

        <p>
        为了进一步扩展我的技能，我还参加了数学竞赛，以扩展我的数学和编程技能，并在中国家庭和金融调查与研究中心实习，担任数据处理分析师，负责管理大部分每天使用STATA对数据进行初步的清理，处理和分析。这些基于项目的经验和专业发展为我提供了宝贵的机会，可以从事计算机科学理论知识的学习和应用。通过研究和项目参与，我能够通过应用计算机科学的概念和算法来学习如何处理金融以及其他学科的重要方面。这些经验也向我紧急表明，需要进一步的学术学习，以便为将来进行更复杂的研究和竞争性作品做好准备。 
        </p>

        <p>
        因此，我希望进入一个著名的计算机科学研究生课程，以进一步为自己培养将来在金融业和科技业担任数据工程师的职业所必需的高级理论知识和编程技能。我想在计算机方面获得更深入的学习
        </p>

    </Content>
)


export default AboutPage;