# react-native-modal-handler

Modal Handler Library in react-native : No Mess, No State, No Duplicate.

[![npm version](https://badge.fury.io/js/react-native-modal-handler.svg)](https://badge.fury.io/js/react-native-modal-handler)

*react-native-modal-handler is a library which is based on [eumji-modal-pattern](https://github.com/7772/eumji-modal-pattern?fbclid=IwAR1tArmWXGk5Zo4chu2O8kN729CrKMfZZvJcyJMjuR9fjVFCR2PGeHOjViI).*

### HOW TO USE

**1. npm install**
```
$ npm install --save react-native-modal-handler
```

**2. import `withModal`**
```
import { withModal } from "react-native-modal-handler";
```

**3. export `withModal`**

If the name of your component is `YourComponents.js`

```
export default withModal(Yourcomponent);
```

If you are using another higher-order-component like the `connect` function of redux

```
export default connect(..)(withModal(YourComponent));
```

**4. Making Modal**

I recommend to handle multiple modal components by making `modals` directory.

- `src`
  - `components`
    - `modals`
      - `FirstModal.js`
      - `SecondModal.js`
      - `ThirdModal.js`

Basically, Modal has the structure like below.

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

I used [react-native-modal](https://github.com/react-native-community/react-native-modal) and recommend that you use this library too. Because `react-native-modal` has many features based on pure `Modal` in react-native and is very stable.

You can make Modal component regardless of that the component is stateless or statefull.

Since `isVisible` and `closeModal` props are automatically passed to your modal component, You should define those as props.

If you want to get other props in addition two props above, You can do it by using `...otherProps`.

**5. Making `modals` variable and Rendering Modal Components**

`react-native-modal-handler` adds `showModal` and `closeModal` props in your modal components by passing `modals` variable that will be defined below to the inner of library.

So, You should define which modal you will use in `YourComponent.js`.

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

I recommend that you use `modals` as the name of that variable for consistency.

The keys of the `modals` variable are very important because they are used to open and close modal components.

To maintain uniformity, it is recommended that the names be created with the `camelCase` technique of the name of the modal component.

Next, You will pass the `modals` variable to `withModal` as property.

```
this.props.renderModal(modals);
```

The following is a complete example of this part.

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

**6. How to show and close modal**

- `showModal`

```
// want to show FirstModal.js in YourComponent.js

this.props.showModal("firstModal");
```

- `closeModal`

```
// want to close FirstModal.js in YourComponents.js

this.props.closeModal("firstModal");
```

```
// want to close FirstModal.js in FirstModal.js

<TouchableOpacity onPress={() => closeModal("firstModal")}>
  <Text>Close Modal</Text>
</TouchableOpacity>
```

**7. Full Examples**

[example](https://github.com/7772/react-native-modal-handler/tree/master/example/EumjiModalPattern)

### Contributions

Pull Request and Issue are open at any time.

If you have ideas to improve `react-native-modal-handler`, please do not hesitate to join us.

#### Translations

[한국어](https://github.com/7772/react-native-modal-handler/blob/master/docs/README-KR.md)



