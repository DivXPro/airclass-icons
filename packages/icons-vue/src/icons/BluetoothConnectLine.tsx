// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import BluetoothConnectLineSvg from '@airclass/icons-svg/lib/asn/BluetoothConnectLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BluetoothConnectLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BluetoothConnectLineSvg}></AntdIcon>;
};

BluetoothConnectLine.displayName = 'BluetoothConnectLine';
BluetoothConnectLine.inheritAttrs = false;
export default BluetoothConnectLine;