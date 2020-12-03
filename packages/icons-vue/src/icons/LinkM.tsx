// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import LinkMSvg from '@airclass/icons-svg/lib/asn/LinkM';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LinkM = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LinkMSvg}></AntdIcon>;
};

LinkM.displayName = 'LinkM';
LinkM.inheritAttrs = false;
export default LinkM;