import { useState, useEffect } from "react";

function MyComputer() {
  const [diskUsage, setDiskUsage] = useState(20);
  const [files, setFiles] = useState([]);
  const [isFull, setIsFull] = useState(false);

  const randomNames = [
    "virus.exe",
    "free_ram_download.exe",
    "system32.dll",
    "hack_tool.bat",
    "minecraft_crack.exe",
    "secret_file.dat",
    "passwords.txt",
    "trojan_horse.exe",
    "cool_game_2001.exe",
    "windows_update_fake.exe"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setDiskUsage(prev => {
        let next = prev + Math.random() * 2; 

        if (next >= 100) {
          setIsFull(true);
          return 100;
        }

        return Number(next.toFixed(1));
      });

      setFiles(prev => [
        ...prev,
        {
          name:
            randomNames[Math.floor(Math.random() * randomNames.length)],
          size: (Math.random() * 20 + 1).toFixed(1) + " MB"
        }
      ]);
    }, 5000); 

    return () => clearInterval(interval);
  }, []);

  const cleanDisk = () => {
    setDiskUsage(10);
    setFiles([]);
    setIsFull(false);
  };

  return (
    <div className="mycomputer-app">
      <h2>My Computer</h2>

      <div className="disk">
        <p>Local Disk (C:)</p>

        <div
          style={{
            width: "100%",
            height: "20px",
            border: "2px solid #000",
            background: "#222",
            position: "relative",
          }}
        >
          <div
            style={{
              width: `${diskUsage}%`,
              height: "100%",
              background:
                diskUsage > 80 ? "#f44336" : "#4caf50",
              transition: "0.5s",
            }}
          />
        </div>

        <p>{diskUsage}% used</p>
      </div>

      <div style={{ marginTop: "10px" }}>
        <h4>Files:</h4>

        <div
          style={{
            height: "100px",
            overflowY: "auto",
            background: "#111",
            padding: "5px",
            border: "1px solid #555",
          }}
        >
          {files.map((file, i) => (
            <div key={i} style={{ fontSize: "12px", color: "white" }}>
              📄 {file.name} ({file.size})
            </div>
          ))}
        </div>
      </div>

      <button style={{ marginTop: "10px" }} onClick={cleanDisk}>
        Clean Disk
      </button>

      {isFull && (
        <div className="popup">
          <div
            style={{
              position: "absolute",
              top: "30%",
              left: "30%",
              width: "200px",
              background: "#c0c0c0",
              border: "2px solid black",
              padding: "10px",
              boxShadow: "4px 4px black",
            }}
          >
            <h4>⚠️ ERROR</h4>
            <p>Disk is FULL!</p>
            <button onClick={cleanDisk}>OK</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default MyComputer;