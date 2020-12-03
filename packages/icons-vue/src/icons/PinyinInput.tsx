// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import PinyinInputSvg from '@airclass/icons-svg/lib/asn/PinyinInput';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PinyinInput = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PinyinInputSvg}></AntdIcon>;
};

PinyinInput.displayName = 'PinyinInput';
PinyinInput.inheritAttrs = false;
export default PinyinInput;