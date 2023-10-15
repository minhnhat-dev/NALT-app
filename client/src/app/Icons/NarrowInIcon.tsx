import Icon from '@ant-design/icons'
import { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon'
const NarrowInSvg = () => (
    <svg width="27" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="26.5714" height="24" rx="12" fill="white" fillOpacity="0.15"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M9.51255 13.8518C9.5648 13.7994 9.62687 13.7578 9.69521 13.7295C9.76355 13.7011 9.83681 13.6865 9.9108 13.6865C9.98478 13.6865 10.058 13.7011 10.1264 13.7295C10.1947 13.7578 10.2568 13.7994 10.309 13.8518L13.2858 16.8297L16.2625 13.8518C16.3682 13.7462 16.5114 13.6868 16.6608 13.6868C16.8102 13.6868 16.9534 13.7462 17.059 13.8518C17.1647 13.9574 17.224 14.1007 17.224 14.25C17.224 14.3994 17.1647 14.5427 17.059 14.6483L13.684 18.0233C13.6318 18.0757 13.5697 18.1172 13.5014 18.1456C13.433 18.1739 13.3598 18.1885 13.2858 18.1885C13.2118 18.1885 13.1385 18.1739 13.0702 18.1456C13.0019 18.1172 12.9398 18.0757 12.8875 18.0233L9.51255 14.6483C9.46016 14.596 9.4186 14.534 9.39024 14.4656C9.36189 14.3973 9.34729 14.324 9.34729 14.25C9.34729 14.176 9.36189 14.1028 9.39024 14.0344C9.4186 13.9661 9.46016 13.904 9.51255 13.8518V13.8518Z" fill="white"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M13.2858 5.8125C13.435 5.8125 13.578 5.87176 13.6835 5.97725C13.789 6.08274 13.8483 6.22582 13.8483 6.375V16.5C13.8483 16.6492 13.789 16.7923 13.6835 16.8977C13.578 17.0032 13.435 17.0625 13.2858 17.0625C13.1366 17.0625 12.9935 17.0032 12.888 16.8977C12.7825 16.7923 12.7233 16.6492 12.7233 16.5V6.375C12.7233 6.22582 12.7825 6.08274 12.888 5.97725C12.9935 5.87176 13.1366 5.8125 13.2858 5.8125V5.8125Z" fill="white"/>
    </svg>
)
const NarrowInIcon = (props: Partial<CustomIconComponentProps>) => (
    <Icon component={NarrowInSvg} {...props}/>
)
export default NarrowInIcon