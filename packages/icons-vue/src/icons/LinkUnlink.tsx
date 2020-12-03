// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import LinkUnlinkSvg from '@airclass/icons-svg/lib/asn/LinkUnlink';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LinkUnlink = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LinkUnlinkSvg}></AntdIcon>;
};

LinkUnlink.displayName = 'LinkUnlink';
LinkUnlink.inheritAttrs = false;
export default LinkUnlink;