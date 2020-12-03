// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import TextSvg from '@airclass/icons-svg/lib/asn/Text';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const Text = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TextSvg}></AntdIcon>;
};

Text.displayName = 'Text';
Text.inheritAttrs = false;
export default Text;