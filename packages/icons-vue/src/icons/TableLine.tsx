// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import TableLineSvg from '@airclass/icons-svg/lib/asn/TableLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TableLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TableLineSvg}></AntdIcon>;
};

TableLine.displayName = 'TableLine';
TableLine.inheritAttrs = false;
export default TableLine;