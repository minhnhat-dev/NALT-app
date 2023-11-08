import Icon from "@ant-design/icons";
import { CustomIconComponentProps } from "@ant-design/icons/lib/components/Icon";
const VectorSvg = () => (
  <svg
    width="14"
    height="18"
    viewBox="0 0 14 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.5 12.25H0L5.25 17.5V0H3.5V12.25ZM8.75 2.625V17.5H10.5V5.25H14L8.75 0V2.625Z"
      fill="#666666"
    />
  </svg>
);
const VectorSvgIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={VectorSvg} {...props} />
);
export default VectorSvgIcon;
