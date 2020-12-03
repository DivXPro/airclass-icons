// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import LinkSvg from '@airclass/icons-svg/lib/asn/Link';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const Link = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LinkSvg}></AntdIcon>;
};

Link.displayName = 'Link';
Link.inheritAttrs = false;
export default Link;