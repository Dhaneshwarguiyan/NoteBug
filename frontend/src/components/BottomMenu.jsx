import React from "react";

const BottomMenu = ({id,setId}) => {
  
  function clickHandler(id){
    setId(id);
  }
  const menuTiles = [
    {
      id: 1,
      active: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22.58 7.34999L12.475 1.89699C12.178 1.73699 11.821 1.73699 11.525 1.89699L1.42496 7.34999C0.938957 7.61399 0.757957 8.21999 1.01996 8.70599C1.19996 9.04099 1.54496 9.23099 1.89996 9.23099C2.05996 9.23099 2.22396 9.19299 2.37496 9.11099L3.10896 8.71499L4.69896 19.965C4.91496 21.179 6.00896 22.027 7.35896 22.027H16.641C17.991 22.027 19.085 21.179 19.303 19.939L20.891 8.71399L21.628 9.11199C22.113 9.37499 22.72 9.19399 22.982 8.70799C23.245 8.22199 23.062 7.61499 22.578 7.35299L22.58 7.34999ZM12 15.435C10.205 15.435 8.74996 13.98 8.74996 12.185C8.74996 10.39 10.205 8.93499 12 8.93499C13.795 8.93499 15.25 10.39 15.25 12.185C15.25 13.98 13.795 15.435 12 15.435Z"
            fill="white"
          />
        </svg>
      ),
      inactive: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22.46 7.56999L12.357 2.11499C12.134 1.99499 11.867 1.99499 11.644 2.11499L1.54299 7.56999C1.17899 7.76699 1.04299 8.22199 1.23999 8.58699C1.37499 8.83699 1.63399 8.97999 1.89999 8.97999C2.01999 8.97999 2.14299 8.94999 2.25599 8.88999L3.07099 8.44999L4.69999 19.963C4.91399 21.178 6.00799 22.025 7.35799 22.025H16.64C17.992 22.025 19.085 21.177 19.303 19.938L20.929 8.44799L21.747 8.88999C22.111 9.08299 22.567 8.94999 22.764 8.58599C22.96 8.22299 22.824 7.76799 22.46 7.56999ZM17.822 19.703C17.715 20.309 17.119 20.525 16.642 20.525H7.35999C6.87999 20.525 6.28499 20.309 6.18199 19.727L4.47999 7.68999L12 3.62799L19.522 7.68799L17.822 19.703Z"
            fill="white"
          />
          <path
            d="M8.21997 12.184C8.21997 14.268 9.91497 15.964 12 15.964C14.085 15.964 15.78 14.268 15.78 12.184C15.78 10.1 14.085 8.40399 12 8.40399C9.91497 8.40399 8.21997 10.1 8.21997 12.184ZM14.28 12.184C14.28 13.442 13.258 14.464 12 14.464C10.742 14.464 9.71997 13.442 9.71997 12.184C9.71997 10.926 10.742 9.90399 12 9.90399C13.258 9.90399 14.28 10.926 14.28 12.184Z"
            fill="white"
          />
        </svg>
      ),
    },
    {
      id: 2,
      active: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.53 20.47L17.87 16.81C19.195 15.24 20 13.214 20 11C20 6.03 15.97 2 11 2C6.03 2 2 6.03 2 11C2 15.97 6.03 20 11 20C13.215 20 15.24 19.196 16.808 17.87L20.468 21.53C20.615 21.676 20.808 21.75 20.998 21.75C21.188 21.75 21.383 21.677 21.528 21.53C21.823 21.237 21.823 20.763 21.53 20.47ZM3.5 11C3.5 6.865 6.865 3.5 11 3.5C15.135 3.5 18.5 6.865 18.5 11C18.5 15.135 15.135 18.5 11 18.5C6.865 18.5 3.5 15.135 3.5 11Z"
            fill="#8899A6"
          />
        </svg>
      ),
      inactive: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.53 20.47L17.87 16.81C19.195 15.24 20 13.214 20 11C20 6.03 15.97 2 11 2C6.03 2 2 6.03 2 11C2 15.97 6.03 20 11 20C13.215 20 15.24 19.196 16.808 17.87L20.468 21.53C20.615 21.676 20.808 21.75 20.998 21.75C21.188 21.75 21.383 21.677 21.528 21.53C21.823 21.237 21.823 20.763 21.53 20.47ZM3.5 11C3.5 6.865 6.865 3.5 11 3.5C15.135 3.5 18.5 6.865 18.5 11C18.5 15.135 15.135 18.5 11 18.5C6.865 18.5 3.5 15.135 3.5 11Z"
            fill="#8899A6"
          />
        </svg>
      ),
    },
    {
      id: 3,
      active: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.697 16.468C21.677 16.452 19.557 14.828 19.594 10.438C19.614 7.90501 18.782 5.65601 17.247 4.10401C15.872 2.71101 14.01 1.94001 12.005 1.93201H11.992C9.98804 1.94001 8.12604 2.71201 6.75004 4.10401C5.21604 5.65701 4.38304 7.90601 4.40404 10.437C4.44104 14.769 2.38404 16.404 2.30204 16.467C2.04204 16.661 1.93604 16.997 2.03704 17.305C2.13804 17.613 2.42704 17.82 2.75004 17.82H7.24404C7.34404 20.364 9.43204 22.407 12 22.407C14.568 22.407 16.655 20.364 16.756 17.82H21.25C21.574 17.82 21.86 17.612 21.962 17.305C22.064 16.998 21.957 16.661 21.697 16.468ZM12 20.408C10.534 20.408 9.34304 19.261 9.24404 17.82H14.756C14.656 19.26 13.466 20.407 12 20.407V20.408Z"
            fill="white"
          />
        </svg>
      ),
      inactive: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.697 16.468C21.677 16.452 19.557 14.828 19.594 10.438C19.614 7.90599 18.782 5.65599 17.247 4.10299C15.872 2.70999 14.01 1.93999 12.005 1.92999H11.992C9.98804 1.93999 8.12604 2.70999 6.75004 4.10399C5.21604 5.65699 4.38204 7.90599 4.40404 10.438C4.44104 14.768 2.38404 16.405 2.30204 16.468C2.04204 16.661 1.93604 16.998 2.03704 17.306C2.13904 17.614 2.42704 17.821 2.74904 17.821H7.66904C7.77104 20.131 9.66604 21.981 11.999 21.981C14.332 21.981 16.225 20.131 16.326 17.821H21.248C21.57 17.821 21.858 17.615 21.958 17.307C22.061 17 21.955 16.662 21.695 16.469L21.697 16.468ZM12 20.478C10.495 20.478 9.27004 19.301 9.17204 17.82H14.828C14.728 19.3 13.505 20.48 12 20.48V20.478ZM4.38004 16.32C5.12004 15.188 5.92804 13.292 5.90404 10.424C5.88604 8.26399 6.54804 6.44199 7.81704 5.15699C8.91004 4.04999 10.397 3.43699 12 3.42999C13.603 3.43799 15.087 4.04999 16.18 5.15799C17.45 6.44299 18.113 8.26399 18.095 10.425C18.071 13.293 18.88 15.19 19.62 16.321H4.38004V16.32Z"
            fill="white"
          />
        </svg>
      ),
    },
    {
      id: 4,
      active: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.55 12.082C11.823 12.264 12.177 12.264 12.45 12.082L22 5.716V5.5C22 4.26 20.99 3.25 19.75 3.25H4.25C3.01 3.25 2 4.26 2 5.5V5.697L11.55 12.082Z"
            fill="white"
          />
          <path
            d="M13.26 13.295C12.877 13.55 12.44 13.677 12 13.677C11.56 13.677 11.123 13.55 10.74 13.294L2 7.452V19.122C2 20.362 3.01 21.372 4.25 21.372H19.75C20.99 21.372 22 20.362 22 19.122V7.47L13.26 13.293V13.295Z"
            fill="white"
          />
        </svg>
      ),
      inactive: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.25 3.01801H4.75C3.233 3.01801 2 4.25201 2 5.77001V18.265C2 19.783 3.233 21.018 4.75 21.018H19.25C20.767 21.018 22 19.783 22 18.265V5.77001C22 4.25201 20.767 3.01801 19.25 3.01801ZM4.75 4.51801H19.25C19.94 4.51801 20.5 5.07801 20.5 5.76801V6.48201L12.45 11.849C12.177 12.029 11.824 12.031 11.55 11.847L3.5 6.48201V5.76801C3.5 5.07801 4.06 4.51801 4.75 4.51801ZM19.25 19.516H4.75C4.06 19.516 3.5 18.956 3.5 18.266V8.24001L10.74 13.07C11.123 13.326 11.562 13.454 12 13.454C12.44 13.454 12.877 13.326 13.26 13.071L20.5 8.24101V18.263C20.5 18.953 19.94 19.513 19.25 19.513V19.516Z"
            fill="white"
          />
        </svg>
      ),
    },
  ];
  return (
    <div className="w-full flex justify-around fixed bottom-0 py-4 pt-10 bg-gradient-to-t from-slate-800">
      {menuTiles.map((logo) => {
        if(id === logo.id){
            return <div className="px-2">{logo.active}</div>;
        }
        return <div className="px-2" onClick={()=>clickHandler(logo.id)}>{logo.inactive}</div>;
      })}
    </div>
  );
};

export default BottomMenu;
