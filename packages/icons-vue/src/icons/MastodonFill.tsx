// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import MastodonFillSvg from '@airclass/icons-svg/lib/asn/MastodonFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MastodonFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MastodonFillSvg}></AntdIcon>;
};

MastodonFill.displayName = 'MastodonFill';
MastodonFill.inheritAttrs = false;
export default MastodonFill;