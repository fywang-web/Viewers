import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import SegmentationGroup from './SegmentationGroup';
import SegmentationConfig from './SegmentationConfig';

const GetSegmentationConfig = ({ onConfigChange }) => {
  return <SegmentationConfig onConfigChange={onConfigChange} />;
};

const SegmentationGroupTable = ({
  segmentations,
  onGlobalConfigChange,
  onSegmentationAdd,
  onSegmentationEdit,
  onSegmentationClick,
  onSegmentationDelete,
  showAddSegmentation,
  showAddSegment,
  onSegmentClick,
  onSegmentAdd,
  onSegmentDelete,
  onSegmentEdit,
  onToggleSegmentationVisibility,
  onToggleSegmentVisibility,
  onSegmentColorClick,
  isMinimized,
  onToggleMinimizeSegmentation,
}) => {
  return (
    <div className="font-inter font-[300]">
      <GetSegmentationConfig
        onConfigChange={onGlobalConfigChange}
        showAddSegmentation={showAddSegmentation}
        onSegmentationAdd={onSegmentationAdd}
      />
      <div className="flex flex-col pr-[1px]">
        {!!segmentations.length &&
          segmentations.map(segmentation => {
            const {
              id,
              label,
              displayText = [],
              segmentCount,
              segments,
              isVisible,
              isActive,
              activeSegmentIndex,
            } = segmentation;
            return (
              <>
                <SegmentationGroup
                  key={id}
                  id={id}
                  label={label}
                  isMinimized={isMinimized[id]}
                  segments={segments}
                  showAddSegment={showAddSegment}
                  segmentCount={segmentCount}
                  isActive={isActive}
                  isVisible={isVisible}
                  onSegmentColorClick={onSegmentColorClick}
                  onSegmentationClick={() => onSegmentationClick(id)}
                  activeSegmentIndex={activeSegmentIndex}
                  onToggleMinimizeSegmentation={onToggleMinimizeSegmentation}
                  onSegmentationEdit={onSegmentationEdit}
                  onSegmentationDelete={onSegmentationDelete}
                  onSegmentClick={onSegmentClick}
                  onSegmentEdit={onSegmentEdit}
                  onToggleSegmentVisibility={onToggleSegmentVisibility}
                  onToggleSegmentationVisibility={
                    onToggleSegmentationVisibility
                  }
                  onSegmentAdd={onSegmentAdd}
                  onSegmentDelete={onSegmentDelete}
                />
                <div className="h-2 bg-black"></div>
              </>
            );
          })}
      </div>
      {showAddSegmentation && (
        <div
          className="flex items-center cursor-pointer hover:opacity-80 text-primary-active bg-black text-[12px] pl-1 h-[45px]"
          onClick={() => onSegmentationAdd()}
        >
          <Icon name="row-add" className="w-5 h-5" />
          <div className="pl-1">Add New Segmentation</div>
        </div>
      )}
    </div>
  );
};

SegmentationGroupTable.propTypes = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  segmentations: PropTypes.array.isRequired,
  activeSegmentationId: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onToggleLocked: PropTypes.func,
  onToggleVisibility: PropTypes.func.isRequired,
  onToggleVisibilityAll: PropTypes.func.isRequired,
};

SegmentationGroupTable.defaultProps = {
  title: '',
  amount: 0,
  segmentations: [],
  activeSegmentationId: '',
  onClick: () => {},
  onEdit: () => {},
  onToggleVisibility: () => {},
  onToggleVisibilityAll: () => {},
  onSegmentationClick: () => {},
};

export default SegmentationGroupTable;