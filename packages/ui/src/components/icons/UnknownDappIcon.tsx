import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14 0.5C6.54416 0.5 0.5 6.54416 0.5 14C0.5 21.4558 6.54416 27.5 14 27.5C21.4558 27.5 27.5 21.4558 27.5 14C27.5 6.54416 21.4558 0.5 14 0.5ZM9.34472 4.58579C6.30859 6.09002 4.10415 9.01974 3.60633 12.5H7.53876C7.68428 9.70272 8.23355 7.14353 9.0856 5.154C9.16829 4.96092 9.25465 4.77129 9.34472 4.58579ZM18.6553 4.58579C18.7454 4.77129 18.8317 4.96092 18.9144 5.154C19.7665 7.14353 20.3157 9.70272 20.4612 12.5H24.3937C23.8959 9.01974 21.6914 6.09001 18.6553 4.58579ZM17.4567 12.5C17.3142 10.0509 16.8298 7.90672 16.1567 6.33505C15.7518 5.38976 15.3083 4.72067 14.8922 4.30972C14.4825 3.90511 14.1827 3.825 14 3.825C13.8173 3.825 13.5175 3.90511 13.1078 4.30972C12.6917 4.72067 12.2482 5.38976 11.8433 6.33505C11.1702 7.90672 10.6858 10.0509 10.5433 12.5H17.4567ZM10.5433 15.5H17.4567C17.3142 17.9491 16.8298 20.0933 16.1567 21.6649C15.7518 22.6102 15.3083 23.2793 14.8922 23.6903C14.4825 24.0949 14.1827 24.175 14 24.175C13.8173 24.175 13.5175 24.0949 13.1078 23.6903C12.6917 23.2793 12.2482 22.6102 11.8433 21.6649C11.1702 20.0933 10.6858 17.9491 10.5433 15.5ZM7.53876 15.5H3.60633C4.10415 18.9803 6.3086 21.91 9.34473 23.4142C9.25465 23.2287 9.16829 23.0391 9.0856 22.846C8.23355 20.8565 7.68428 18.2973 7.53876 15.5ZM18.6553 23.4142C18.7453 23.2287 18.8317 23.0391 18.9144 22.846C19.7664 20.8565 20.3157 18.2973 20.4612 15.5H24.3937C23.8959 18.9803 21.6914 21.91 18.6553 23.4142Z"
      fill="currentColor"
    />
  </svg>
)
export default SvgComponent