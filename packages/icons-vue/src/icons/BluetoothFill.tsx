// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import BluetoothFillSvg from '@airclass/icons-svg/lib/asn/BluetoothFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BluetoothFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BluetoothFillSvg}></AntdIcon>;
};

BluetoothFill.displayName = 'BluetoothFill';
BluetoothFill.inheritAttrs = false;
export default BluetoothFill;