// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import KeyboardLineSvg from '@airclass/icons-svg/lib/asn/KeyboardLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const KeyboardLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={KeyboardLineSvg}></AntdIcon>;
};

KeyboardLine.displayName = 'KeyboardLine';
KeyboardLine.inheritAttrs = false;
export default KeyboardLine;