// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import KeynoteLineSvg from '@airclass/icons-svg/lib/asn/KeynoteLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const KeynoteLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={KeynoteLineSvg}></AntdIcon>;
};

KeynoteLine.displayName = 'KeynoteLine';
KeynoteLine.inheritAttrs = false;
export default KeynoteLine;