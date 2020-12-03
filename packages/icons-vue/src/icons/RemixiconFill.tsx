// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import RemixiconFillSvg from '@airclass/icons-svg/lib/asn/RemixiconFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const RemixiconFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RemixiconFillSvg}></AntdIcon>;
};

RemixiconFill.displayName = 'RemixiconFill';
RemixiconFill.inheritAttrs = false;
export default RemixiconFill;