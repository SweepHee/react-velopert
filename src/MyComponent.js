import React from 'react';
import PropTypes from 'prop-types';

const MyComponent = ({ name, children, favoriteNumber }) => {
    // const { name, children } = props; // 비구조화 할당 혹은 구조 분해 문법. props에 구조 분해 할당을 선언하여서 이 부분은 필요 없어졌다.
    return (
        <div>
            안녕하세요, 제 이름은 {name} 입니다. <br />
            children 값은 {children}
            <br />
            제가 좋아하는 숫자는 {favoriteNumber} 입니다.
        </div>
    )
}

MyComponent.defaultProps = {
    name: '기본 이름'
}

MyComponent.propTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired
}



export default MyComponent;