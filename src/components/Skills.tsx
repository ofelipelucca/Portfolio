import { useState, useEffect, useRef } from "react";
import './css/Skills.css'

function Linguagens() {
    return (
        <div className="skill-content">
            <h3>linguagens</h3>
            <div className="skill-items">
                <p>c;</p>
                <p>cpp;</p>
                <p>c#;</p>
                <p>python;</p>
                <p>java;</p>
                <p>typescript;</p>
                <p>javascript;</p>
            </div>
        </div>
    );
}

function Frameworks() {
    return (
        <div className="skill-content">
            <h3>frameworks</h3>
            <div className="skill-items">
                <p>node.js;</p>
                <p>.net;</p>
                <p>react;</p>
                <p>vue;</p>
                <p>angular;</p>
                <p>mediapipe;</p>
            </div>
        </div>
    );
}

function SoftSkills() {
    return (
        <div className="skill-content">
            <h3>soft skills</h3>
            <div className="skill-items">
                <p>comunicação;</p>
                <p>trabalho em equipe;</p>
                <p>resolução de problemas;</p>
                <p>criatividade;</p>
                <p>bom aprendiz;</p>
                <p>resiliência;</p>
            </div>
        </div>
    );
}

interface SkillsProps {
    doScroll: (value: number | string) => void;
}

function Skills({doScroll}: SkillsProps) {
    const [selectedSkill, setSelectedSkill] = useState<string>("linguagens");
    const [activePosition, setActivePosition] = useState<number>(0);

    const buttonRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({
        linguagens: null,
        frameworks: null,
        softskills: null,
    });

    function handleClick(target: string) {
        setSelectedSkill(target);
        doScroll("skills");
    }

    useEffect(() => {
        const button = buttonRefs.current[selectedSkill];
        if (button) {
            setActivePosition(button.offsetLeft);
        }
    }, [selectedSkill]);

    return (
        <div>
            <h2>minhas skills</h2>
            <div className="skills-container" id="skills">
                <div className="skills-navbar">
                    <nav>
                        <div
                            className="nav-background"
                            style={{
                                transform: `translateX(${activePosition}px)`,
                                width: buttonRefs.current[selectedSkill]?.offsetWidth || 0,
                            }}
                        ></div>

                        <button
                            ref={(el) => (buttonRefs.current["linguagens"] = el)}
                            className="nav-button" id={selectedSkill === "linguagens" ? "active" : ""}
                            onClick={() => handleClick("linguagens")}
                        >
                            linguagens
                        </button>
                        <button
                            ref={(el) => (buttonRefs.current["frameworks"] = el)}
                            className="nav-button" id={selectedSkill === "frameworks" ? "active" : ""}
                            onClick={() => handleClick("frameworks")}
                        >
                            frameworks
                        </button>
                        <button
                            ref={(el) => (buttonRefs.current["softskills"] = el)}
                            className="nav-button" id={selectedSkill === "softskills" ? "active" : ""}
                            onClick={() => handleClick("softskills")}
                        >
                            soft skills
                        </button>
                    </nav>
                </div>
                <div className="selected-skills-content">
                    {selectedSkill === "linguagens" && <Linguagens />}
                    {selectedSkill === "frameworks" && <Frameworks />}
                    {selectedSkill === "softskills" && <SoftSkills />}
                </div>
            </div>
        </div>
    );
}

export default Skills;