// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FinderLineSvg from '@airclass/icons-svg/lib/asn/FinderLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FinderLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FinderLineSvg}></AntdIcon>;
};

FinderLine.displayName = 'FinderLine';
FinderLine.inheritAttrs = false;
export default FinderLine;