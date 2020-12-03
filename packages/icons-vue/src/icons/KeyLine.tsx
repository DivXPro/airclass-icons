// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import KeyLineSvg from '@airclass/icons-svg/lib/asn/KeyLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const KeyLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={KeyLineSvg}></AntdIcon>;
};

KeyLine.displayName = 'KeyLine';
KeyLine.inheritAttrs = false;
export default KeyLine;