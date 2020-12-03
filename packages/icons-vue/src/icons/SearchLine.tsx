// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import SearchLineSvg from '@airclass/icons-svg/lib/asn/SearchLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SearchLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SearchLineSvg}></AntdIcon>;
};

SearchLine.displayName = 'SearchLine';
SearchLine.inheritAttrs = false;
export default SearchLine;