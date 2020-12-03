// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import WubiInputSvg from '@airclass/icons-svg/lib/asn/WubiInput';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const WubiInput = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={WubiInputSvg}></AntdIcon>;
};

WubiInput.displayName = 'WubiInput';
WubiInput.inheritAttrs = false;
export default WubiInput;