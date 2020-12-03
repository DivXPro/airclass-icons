// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import TabletLineSvg from '@airclass/icons-svg/lib/asn/TabletLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TabletLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TabletLineSvg}></AntdIcon>;
};

TabletLine.displayName = 'TabletLine';
TabletLine.inheritAttrs = false;
export default TabletLine;