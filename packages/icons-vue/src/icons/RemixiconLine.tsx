// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import RemixiconLineSvg from '@airclass/icons-svg/lib/asn/RemixiconLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const RemixiconLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RemixiconLineSvg}></AntdIcon>;
};

RemixiconLine.displayName = 'RemixiconLine';
RemixiconLine.inheritAttrs = false;
export default RemixiconLine;