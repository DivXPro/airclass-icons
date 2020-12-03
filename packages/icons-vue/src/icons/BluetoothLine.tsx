// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import BluetoothLineSvg from '@airclass/icons-svg/lib/asn/BluetoothLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BluetoothLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BluetoothLineSvg}></AntdIcon>;
};

BluetoothLine.displayName = 'BluetoothLine';
BluetoothLine.inheritAttrs = false;
export default BluetoothLine;