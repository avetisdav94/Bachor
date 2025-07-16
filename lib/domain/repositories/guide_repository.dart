import '../entities/guide_category.dart';
import '../entities/emergency_contact.dart';

abstract class GuideRepository {
  Future<List<GuideCategory>> getGuideCategories();
  Future<List<EmergencyContact>> getEmergencyContacts();
  Future<GuideCategory?> getGuideCategoryById(String id);
}