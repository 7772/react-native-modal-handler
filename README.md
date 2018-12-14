# react-native-modal-handler

복잡하지 않고, state 가 없고, 중복된 코드가 없도록 모달을 관리하는 라이브러리

[![npm version](https://badge.fury.io/js/react-native-modal-handler.svg)](https://badge.fury.io/js/react-native-modal-handler)

*react-native-modal-handler 는 [eumji-modal-pattern](https://github.com/7772/eumji-modal-pattern?fbclid=IwAR1tArmWXGk5Zo4chu2O8kN729CrKMfZZvJcyJMjuR9fjVFCR2PGeHOjViI) 의 내용에 기반을 두고 작성된 라이브러리입니다.*

### 사용방법

**1. npm install**
```
$ npm install --save react-native-modal-handler
```

**2. import `withModal`**
```
import { withModal } from "react-native-modal-handler";
```

**3. export `withModal`**

만약 여러분의 컴포넌트 이름이 `YourComponent.js` 라면

```
export default withModal(YourComponent);
```

만약 여러분이 redux 의 connect 함수를 사용하고 있다면

```
export default connect(..)(withModal(YourComponent));
```

**4. 모달 만들기**

다음과 같이 `modals` 디렉토리를 만들어서 여러 모달들을 관리할 것을 추천합니다.

- `src`
  - `components`
    - `modals`
      - `FirstModal.js`
      - `SecondModal.js`
      - `ThirdModal.js`

모달은 기본적으로 아래와 같은 구조입니다.

```
import Modal from "react-native-modal";

export default FirstModal = ({ isVisible, closeModal, ...otherProps }) => {
  return (
    <Modal isVisible={isVisible}>
      <View style={styles.modal}>

        <TouchableOpacity onPress={() => closeModal("firstModal")}>
          <Text>Close Modal</Text>
        </TouchableOpacity>

        <View style={styles.main}>
          <TouchableOpacity onPress={() => otherProps.sayHello()}>
            <Text>FirstModal and sayHello</Text>
          </TouchableOpacity>
        </View>

      </View>
    </Modal>
  );
};
```

저는 [react-native-modal](https://github.com/react-native-community/react-native-modal) 을 사용했고 여러분도 이 라이브러리를 사용할 것을 추천합니다.

모달 컴포넌트는 stateless 또는 statefull 어떤 것이든 관계없이 만드시면 됩니다.

props 으로 `isVisible`, `closeModal` 이 자동으로 전달 되기때문에, 위에 예제처럼 반드시 선언해주어야 합니다.

만약 여러분이 위의 두 props 이외에 다른 props 을 사용할 것 이라면, `...otherProps` 를 통해 접근하시면 됩니다.

**5. `modals` 변수 만들기 및 모달 컴포넌트 렌더링 하기**

`react-native-modal-handler` 는 라이브러리 내부로 모탈 컴포넌트들을 전달하여 `showModal`, `closeModal` 등의 props 를 주입합니다.

따라서, 여러분이 모달을 사용할 `YourComponent.js` 에 어떠한 모달을 사용할 것인지 선언해주어야 합니다.

```
// YourComponent.js

import FirstModal from "./modals/FirstModal";
import SecondModal from "./modals/SecondModal";
import ThirdModal from "./modals/ThirdModal";

const modals = {
  firstModal: <FirstModal />,
  SecondModal: <SecondModal />,
  ThirdModal: <ThirdModal />
};
```

변수의 이름은 통일성을 위하여 항상 `modals` 를 사용할 것을 추천합니다.

`key` 값으로 해당 모달 컴포넌트 이름의 `camelCase` 기법으로 이름을 지어줍니다.

이 `key` 값들은 해당 모달 컴포넌트를 열고 닫을때 사용되기 때문에 아주 중요합니다.

다음으로 이렇게 선언한 `modals` 변수를 `renderModal` 함수의 인자로 보내줍니다.

```
this.props.renderModal(modals);
```

다음은 이 부분에 관한 전체 예제 입니다.

```
import FirstModal from "./modals/FirstModal";
import SecondModal from "./modals/SecondModal";
import ThirdModal from "./modals/ThirdModal";

render() {
  const modals = {
    firstModal: <FirstModal />,
    SecondModal: <SecondModal />,
    ThirdModal: <ThirdModal />
  };
  return (
    this.props.renderModal(modals);
  );
}
```

**6. showModal 과 closeModal 사용하기**

- showModal 사용법

```
// FirstModal.js 를 열고 싶을때
// YourComponent.js

this.props.showModal("firstModal");
```

- closeModal 사용법

```
// FirstModal.js 를 닫고 싶을때
// YourComponent.js

this.props.closeModal("firstModal");
```

```
// FirstModal.js 를 닫고 싶을때
// FirstModal.js

<TouchableOpacity onPress={() => closeModal("firstModal")}>
  <Text>Close Modal</Text>
</TouchableOpacity>
```

**7. 전체 예제**

[examples]()

### 기여하기

Pull Request 와 Issue 는 언제나 열려있습니다. 

`react-native-modal-handler` 를 개선시킬 아이디어가 있으시다면, 주저없이 참여해주세요.















