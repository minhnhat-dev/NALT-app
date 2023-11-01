import Icon from '@ant-design/icons'
import { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon'
const ArrowUpSvg = () => (
    <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="25.2816" height="24" rx="12" transform="matrix(1 0 0 -1 0 24)" fill="white" fillOpacity="0.15"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M8.86753 10.1482C8.91978 10.2006 8.98185 10.2422 9.05019 10.2705C9.11853 10.2989 9.19179 10.3135 9.26578 10.3135C9.33976 10.3135 9.41303 10.2989 9.48136 10.2705C9.5497 10.2422 9.61177 10.2006 9.66403 10.1482L12.6408 7.17035L15.6175 10.1482C15.7231 10.2538 15.8664 10.3132 16.0158 10.3132C16.1651 10.3132 16.3084 10.2538 16.414 10.1482C16.5196 10.0426 16.579 9.89934 16.579 9.74997C16.579 9.6006 16.5196 9.45734 16.414 9.35172L13.039 5.97672C12.9868 5.92434 12.9247 5.88278 12.8564 5.85442C12.788 5.82606 12.7148 5.81147 12.6408 5.81147C12.5668 5.81147 12.4935 5.82606 12.4252 5.85442C12.3568 5.88278 12.2948 5.92434 12.2425 5.97672L8.86753 9.35172C8.81514 9.40397 8.77358 9.46605 8.74522 9.53438C8.71687 9.60272 8.70227 9.67598 8.70227 9.74997C8.70227 9.82396 8.71687 9.89722 8.74522 9.96556C8.77358 10.0339 8.81514 10.096 8.86753 10.1482Z" fill="white"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M12.6407 18.1875C12.7899 18.1875 12.933 18.1282 13.0385 18.0227C13.144 17.9173 13.2032 17.7742 13.2032 17.625V7.5C13.2032 7.35082 13.144 7.20774 13.0385 7.10225C12.933 6.99676 12.7899 6.9375 12.6407 6.9375C12.4916 6.9375 12.3485 6.99676 12.243 7.10225C12.1375 7.20774 12.0782 7.35082 12.0782 7.5V17.625C12.0782 17.7742 12.1375 17.9173 12.243 18.0227C12.3485 18.1282 12.4916 18.1875 12.6407 18.1875Z" fill="white"/>
    </svg>
)
const ArrowUpIcon = (props: Partial<CustomIconComponentProps>) => (
    <Icon component={ArrowUpSvg} {...props}/>
)
export default ArrowUpIcon